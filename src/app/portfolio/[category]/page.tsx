"use client";

import { projectsData } from "@/data/projects";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function PortfolioCategoryPage() {

  const params = useParams();

  const category = params.category as string;

  const projects =
    projectsData[category as keyof typeof projectsData];

  const [selectedProject, setSelectedProject] =
    useState<string[] | null>(null);

  if (!projects) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl">
        Category not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-16">

        <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-sm mb-6">
          Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold capitalize mb-6">
          {category.replace("-", " ")}
        </h1>

        <p className="text-white/70 text-xl max-w-3xl">
          Explore our completed{" "}
          {category.replace("-", " ")} projects crafted with
          elegance and luxury aesthetics.
        </p>

      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <div
            key={index}
            className="group bg-[#111111] rounded-[35px] overflow-hidden border border-white/10 hover:border-[#d6b37d]/40 transition duration-500"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={project.cover}
                alt={project.title}
                className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            </div>

            {/* Content */}
            <div className="p-7">

              <p className="uppercase tracking-[0.3em] text-[#d6b37d] text-xs mb-4">
                Premium Interior
              </p>

              <h2 className="text-3xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-white/60 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Explore Button */}
              <button
                onClick={() =>
                  setSelectedProject(project.images)
                }
                className="px-6 py-3 rounded-full border border-white/20 text-sm hover:bg-[#d6b37d] hover:text-black transition duration-300"
              >
                Explore Project
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Fullscreen Gallery */}
      {selectedProject && (

        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto p-10">

          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="fixed top-6 right-6 text-white text-5xl z-50"
          >
            ×
          </button>

          {/* Gallery */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

            {selectedProject.map((image, index) => (

              <img
                key={index}
                src={image}
                alt="Project"
                className="w-full aspect-[4/5] object-cover"
              />

            ))}

          </div>

        </div>

      )}

    </div>
  );
}