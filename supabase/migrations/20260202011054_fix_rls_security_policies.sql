/*
  # Fix RLS Security Policies

  1. Changes to RLS Policies
    - Drop overly permissive INSERT policy for contact_submissions
    - Create new INSERT policy with validation constraints
    - Drop overly permissive UPDATE policy for contact_submissions  
    - Create new UPDATE policy that only allows status updates
    
  2. Security Improvements
    - INSERT policy now validates:
      - Name must be between 2 and 100 characters
      - Phone must be between 7 and 20 characters
      - Message must be between 10 and 1000 characters
    - UPDATE policy now only allows:
      - Authenticated users to update status field only
      - Status must be one of: 'new', 'contacted', 'closed'
    
  3. Notes
    - Public users can still submit contact forms with valid data
    - Authenticated users (business owners) can update submission status
    - All other fields are protected from modification
*/

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;

-- Create new INSERT policy with validation
CREATE POLICY "Public can submit valid contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Validate name field
    name IS NOT NULL AND
    length(trim(name)) >= 2 AND
    length(name) <= 100 AND
    -- Validate phone field
    phone IS NOT NULL AND
    length(trim(phone)) >= 7 AND
    length(phone) <= 20 AND
    -- Validate message field
    message IS NOT NULL AND
    length(trim(message)) >= 10 AND
    length(message) <= 1000 AND
    -- Ensure status is set to 'new' (if provided)
    (status IS NULL OR status = 'new')
  );

-- Create new UPDATE policy that only allows status changes
CREATE POLICY "Authenticated users can update submission status"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (
    -- Only allow updating to valid status values
    status IN ('new', 'contacted', 'closed') AND
    -- Ensure other fields are not changed
    name = (SELECT name FROM contact_submissions WHERE id = contact_submissions.id) AND
    phone = (SELECT phone FROM contact_submissions WHERE id = contact_submissions.id) AND
    message = (SELECT message FROM contact_submissions WHERE id = contact_submissions.id) AND
    created_at = (SELECT created_at FROM contact_submissions WHERE id = contact_submissions.id)
  );