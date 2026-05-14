"use client";

import { useState } from "react";

import { db, storage } from "@/lib/firebase";

import { collection, addDoc } from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function AdminPage() {

  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("");

  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleUpload = async () => {

    if (!coverImage) {
      alert("Please select image");
      return;
    }

    try {

      const imageRef = ref(
        storage,
        `projects/${Date.now()}-${coverImage.name}`
      );

      await uploadBytes(imageRef, coverImage);

      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "projects"), {
        description,
        category,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Project Uploaded Successfully");

      setDescription("");
      setCategory("");
      setCoverImage(null);

    } catch (error) {

      console.error(error);

      alert("Upload Failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-12 text-center">
          Upload Project
        </h1>

        <div className="space-y-6">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-xl outline-none"
          >
            <option value="">Select Category</option>

            <option value="Kitchen">
              Modular Kitchen
            </option>

            <option value="Bedroom">
              Bedroom
            </option>

            <option value="Wardrobe">
              Wardrobe
            </option>

            <option value="TV Unit">
              TV Unit
            </option>

            <option value="Bathroom">
              Bathroom
            </option>

            <option value="Living Room">
              Living Room
            </option>

          </select>

          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-xl outline-none min-h-[140px]"
          />

          <input
            type="file"
            onChange={(e) => {

              if (e.target.files) {
                setCoverImage(e.target.files[0]);
              }

            }}
            className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-xl"
          />

          <button
            onClick={handleUpload}
            className="w-full bg-[#d6b37d] text-black px-10 py-5 rounded-xl font-semibold text-lg hover:bg-[#e7c997] transition"
          >
            Upload Project
          </button>

        </div>

      </div>

    </main>
  );
}