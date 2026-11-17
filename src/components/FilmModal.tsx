"use client";

import React, { useEffect, useRef } from "react";

interface FilmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilmModal({ isOpen, onClose }: FilmModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0a0a0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0e0e12]/80">
          <span className="text-xs font-mono tracking-wider uppercase text-white/60">
            SlashVibe Launch Film
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Close film"
          >
            ✕
          </button>
        </div>

        {/* Video Wrapper */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src="/videos/slashvibe-launch.26a460364070.mp4"
            controls
            playsInline
            autoPlay
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

