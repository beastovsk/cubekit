"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CloudCog } from "lucide-react";

export const GenerationDialog = () => {
  const [formData, setFormData] = useState({
    business: "",
    offer: "",
    socialNetwork: "X",
    socialLink: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here, you can send formData to your backend or API
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Dialog description</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="business">Field1</Label>
            <Input
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="offer">Field2</Label>
            <Input
              id="offer"
              name="offer"
              value={formData.offer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label>Field3</Label>
            <RadioGroup
              value={formData.socialNetwork}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, socialNetwork: value }))
              }
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="X" id="x" />
                <Label htmlFor="x">1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="LinkedIn" id="linkedin" />
                <Label htmlFor="linkedin">2</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Facebook" id="facebook" />
                <Label htmlFor="facebook">3</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="socialLink">Field4</Label>
            <Input
              id="socialLink"
              name="socialLink"
              value={formData.socialLink}
              onChange={handleChange}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">Generate</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
