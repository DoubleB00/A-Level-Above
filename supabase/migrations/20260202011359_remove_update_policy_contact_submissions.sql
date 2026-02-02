/*
  # Remove UPDATE Policy for Contact Submissions

  1. Security Changes
    - Drop UPDATE policy for contact_submissions table
    - UPDATE access from the public website is not needed
    - Status updates should be handled through a separate admin interface
      with stricter access controls (outside this application)
    
  2. Rationale
    - Public website only needs to INSERT contact forms
    - Business owners can view submissions through SELECT policy
    - Removing UPDATE eliminates the security risk of unrestricted row access
    - If status updates are needed, they should be implemented with:
      - Role-based access control (e.g., checking for admin role)
      - User ownership validation
      - In a separate admin dashboard with proper authentication
*/

-- Drop the UPDATE policy that has overly permissive USING clause
DROP POLICY IF EXISTS "Authenticated users can update submission status" ON contact_submissions;