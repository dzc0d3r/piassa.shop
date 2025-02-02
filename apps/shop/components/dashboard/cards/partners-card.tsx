"use client";

import { AddParnterForm } from "@/components/dashboard/forms";
import { Button } from "@piassa/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@piassa/ui/components/dialog";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const PartnerCard = () => {
  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            size="sm"
            className="flex gap-4 text-start font-medium transition-all duration-500 ease-in-out"
          >
            Ajouter nouveax partner
            <AiOutlinePlus className="!h-5 !w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => e.preventDefault()} // Prevent closing on outside click
          onEscapeKeyDown={(e) => e.preventDefault()} // Prevent closing on Esc key
          className="max-h-[92%] min-h-[85%] min-w-[80%] max-w-[90%] overflow-scroll bg-white/70 text-black/70 backdrop-blur-md sm:max-w-[425px]"
        >
          <DialogHeader className="flex items-center justify-center text-xl">
            <DialogTitle className="text-xl">Add Partner</DialogTitle>
            <DialogDescription className="text-xs">
              Add new Partner here. Click Add when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <AddParnterForm />

          <DialogFooter className="mx-3">
            <Button type="submit">Add Partner</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PartnerCard;
