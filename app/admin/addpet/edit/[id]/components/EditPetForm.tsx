"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ViewPetFormProps } from "../../../view/[id]/components/ViewPetForm";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Petname must be at least 2 characters.",
  }),
  description: z.string().min(20, {
    message: "Pet description must be at least 20 characters.",
  }),
  image: z.string(),
  price: z.string().min(1, {
    message: "Price Image is required.",
  }),
});

const EditPetForm: React.FC<ViewPetFormProps> = ({ pet }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [file, setFile] = useState<File | undefined>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: pet?.name,
      description: pet?.description,
      image: pet?.image,
      price: pet?.price,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const { name, description, image, price } = values;
    console.log(file);
    try {
      setLoading(true);
      const response = await axios.post(
        `/api/addpet/${pet?.id}`,
        {
          name,
          description,
          image: file,
          price,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      const { message } = response.data;
      toast.success(message);
      router.push("/admin/addpet");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/addpet/${pet?.id}`);
      console.log(response);
      const { message } = response.data;
      toast.success(message);
      router.push("/admin/addpet");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant={"destructive"}
        className="mt-2 mb-2"
        disabled={loading}
        onClick={() => handleDelete()}
      >
        Delete
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter petname here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter pet description here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter petname here"
                    type="file"
                    onChange={(e) => (
                      field.onChange(e), setFile(e.target.files?.[0])
                    )}
                    accept="image/*"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Image
            src={`/${pet?.image.split("/").pop()}`}
            width={200}
            height={200}
            alt={`/${pet?.image.split("/").pop()}`}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet Price</FormLabel>
                <FormControl>
                  <Input placeholder="Enter pet price here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            Save
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EditPetForm;
