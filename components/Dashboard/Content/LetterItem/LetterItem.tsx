"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoreHorizontal } from "lucide-react";

export const LetterItem = ({ letter }: any) => {
  return (
    <div className="relative border p-4 rounded-xl shadow-lg bg-white hover:shadow-xl transition duration-300">
      {/* Иконка для открытия диалога */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{letter.business}</DialogTitle>
            <DialogDescription>{letter.offer}</DialogDescription>
          </DialogHeader>
          <p>
            <strong>Social Network:</strong> {letter.socialNetwork}
          </p>
          <p>
            <strong>Profile Link:</strong>
            <a
              href={letter.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {letter.socialLink}
            </a>
          </p>
          <p>
            <strong>Generated Letter:</strong> {letter.generatedLetter}
          </p>
        </DialogContent>
      </Dialog>

      {/* Контент карточки */}
      <h3 className="text-lg font-semibold mb-1">{letter.business}</h3>
      <p className="text-sm text-gray-600 truncate">{letter.offer}</p>
    </div>
  );
};
