-- Create a public storage bucket for website images
INSERT INTO storage.buckets (id, name, public) VALUES ('website-images', 'website-images', true);

-- Create RLS policies for public read access to website images
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'website-images');

-- Allow public viewing of images in the website-images bucket
CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'website-images');