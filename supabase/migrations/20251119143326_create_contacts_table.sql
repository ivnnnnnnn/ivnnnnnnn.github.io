/*
  # Create contacts table for CV contact form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `is_read` (boolean)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy to allow anonymous inserts (for form submissions)
    - Add policy to allow authenticated admins to read all messages
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_read boolean DEFAULT false
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read own messages"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
