"use client";

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
import { Input } from "@piassa/ui/components/input";
import { Label } from "@piassa/ui/components/label";
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
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PartnerCard;
