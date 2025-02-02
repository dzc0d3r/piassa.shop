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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@piassa/ui/components/table";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const partners = [
  {
    name: "Hamza",
    email: "hamza@gmail.com",
    address: "Algiers",
    phone: +213777777777,
    start_date: "02-02-2025",
    store: "EFK43210",
    active: true,
    specialty: "auto",
  },
  {
    name: "Karim Djamel",
    email: "karim.djamel@example.com",
    address: "Oran",
    phone: +213555555555,
    start_date: "15-03-2024",
    store: "EFK43211",
    active: true,
    specialty: "electronics",
  },
  {
    name: "Leila Amara",
    email: "leila.a@business.dz",
    address: "Constantine",
    phone: +213666666666,
    start_date: "10-05-2023",
    store: "EFK43212",
    active: false,
    specialty: "construction",
  },
  {
    name: "Youssef Bensaid",
    email: "youssef.b@proton.dz",
    address: "Annaba",
    phone: +213777123456,
    start_date: "22-09-2024",
    store: "EFK43213",
    active: true,
    specialty: "food",
  },
  {
    name: "Nadia Cherif",
    email: "nadia.cherif@mail.dz",
    address: "Tlemcen",
    phone: +213550987654,
    start_date: "01-01-2025",
    store: "EFK43214",
    active: true,
    specialty: "textiles",
  },
  {
    name: "Omar Toumi",
    email: "omar.toumi@entreprise.dz",
    address: "Béjaïa",
    phone: +213660123456,
    start_date: "14-07-2024",
    store: "EFK43215",
    active: false,
    specialty: "furniture",
  },
  {
    name: "Samira Bekkar",
    email: "samira.b@group.dz",
    address: "Batna",
    phone: +213770456789,
    start_date: "30-11-2023",
    store: "EFK43216",
    active: true,
    specialty: "agriculture",
  },
];

const PartnerCard = () => {
  return (
    <div className="relative flex !max-h-[90%] w-full flex-col gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            size="sm"
            className="flex w-fit gap-4 self-end text-start font-medium transition-all duration-500 ease-in-out"
          >
            Ajouter nouveau partenaire
            <AiOutlinePlus className="!h-5 !w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="max-h-[92%] min-h-[85%] min-w-[80%] max-w-[90%] overflow-scroll bg-white/70 text-black/70 backdrop-blur-md sm:max-w-[425px]"
        >
          <DialogHeader className="flex items-center justify-center text-xl">
            <DialogTitle className="text-xl">Ajouter un partenaire</DialogTitle>
            <DialogDescription className="text-xs">
              Ajoutez un nouveau partenaire ici. Cliquez sur Ajouter lorsque
              vous avez terminé.
            </DialogDescription>
          </DialogHeader>

          <AddParnterForm />

          <DialogFooter className="mx-3">
            <Button type="submit">Ajouter</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader className="border-none bg-slate-700 hover:bg-slate-600">
          <TableRow className="">
            <TableHead className="text-white">Nom</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Adresse</TableHead>
            <TableHead className="text-white">Téléphone</TableHead>
            <TableHead className="text-white">Date de début</TableHead>
            <TableHead className="text-white">Magasin</TableHead>
            <TableHead className="text-white">Statut</TableHead>
            <TableHead className="text-white">Spécialité</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <div className="flex max-h-[300px] gap-3 overflow-scroll">
        <Table className="relative bg-white">
          <TableCaption>Liste de tous les partenaires enregistrés</TableCaption>

          {/* Wrap the TableBody in a div with a fixed max-height and vertical scroll */}

          <TableBody className="">
            {partners.map((partner) => (
              <TableRow key={partner.name} className="overflow-auto">
                <TableCell className="font-medium">{partner.name}</TableCell>
                <TableCell>{partner.email}</TableCell>
                <TableCell>{partner.address}</TableCell>
                <TableCell>+213{partner.phone.toString().slice(1)}</TableCell>
                <TableCell>{partner.start_date}</TableCell>
                <TableCell>{partner.store}</TableCell>
                <TableCell>
                  <span
                    className={`rounded px-2 py-1 ${
                      partner.active
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {partner.active ? "Actif" : "Inactif"}
                  </span>
                </TableCell>
                <TableCell>{partner.specialty}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={7}>Total partenaires</TableCell>
              <TableCell className="text-right">{partners.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default PartnerCard;
