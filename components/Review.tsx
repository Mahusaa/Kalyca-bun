"use client";
import { useState } from "react";
import { Play, Pause } from "lucide-react";

type VideoPlayerProps = {
  videoId: string;
  name: string;
};

const videoReviews = [
  {
    name: "Aisyah Nurul",
    videoId: "1B8ah_RvI5RWCzl_YDt4N0SxW1Hbnl_dF",
  },
  {
    name: "Muhammad Fadhlan",
    videoId: "1fnxNchojPuT5zq_12pG88GVMZo4P-8wk",
  },
  {
    name: "Siti Zahra",
    videoId: "13q8BQAVS6VTRpIpHMTcUeVTE361iPa-F",
  },
];

function VideoPlayer({ videoId, name }: VideoPlayerProps) {

  return (
    <div className="relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={`https://drive.google.com/file/d/${videoId}/preview`}
        className="w-full h-full"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={`Video testimoni ${name}`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Overlay play button */}
    </div>
  );
}

export default function VideoTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-3xl text-primary mb-6">
            Testimoni Video dari Orang Tua
          </h3>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Dengarkan langsung cerita dan pengalaman orang tua yang anaknya
            disekolahkan di KalycaAzzahra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-secondary-50 rounded-2xl shadow-lg p-6"
            >
              <div className="mb-6">
                <VideoPlayer
                  videoId={review.videoId}
                  name={review.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
