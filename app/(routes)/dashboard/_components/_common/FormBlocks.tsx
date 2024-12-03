import React, { useState } from "react";
import BlockBtnElement from "@/components/BlockBtnElement";
import { FormBlocks } from "@/@types/form-block.type";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useBuilder } from "@/context/builder-provider";

const FormBlockBox = () => {
  const { formData } = useBuilder();
  const isPublished = formData?.published;

  const [search, setSearch] = useState<string>("");

  const filteredBlocks = Object.values(FormBlocks).filter((block) =>
    block.blockBtnElement.label.toLowerCase().includes(search.toLowerCase())
  );

  // Group the filtered blocks by category
  const layoutBlocks = filteredBlocks.filter(
    (block) => block.blockCategory === "Layout"
  );
  const formBlocks = filteredBlocks.filter(
    (block) => block.blockCategory === "Form"
  );

  return (
    <div className="w-full">
      <div className="py-4 text-sm">
        <Input
          placeholder="Search Blocks"
          className="bg-gray-50 placeholder:text-gray-400 border"
          value={search}
          disabled={isPublished}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-3 w-full">
        {layoutBlocks?.length > 0 && (
          <div className="mb-2">
            <h5 className="text-[13px] text-gray-500 font-medium">Layout</h5>
            <div className="pt-1 grid grid-cols-3 gap-3">
              {layoutBlocks.map((block) => (
                <BlockBtnElement
                  key={block.blockType}
                  formBlock={block}
                  disabled={isPublished}
                />
              ))}
            </div>
          </div>
        )}
        <Separator />
        {formBlocks?.length > 0 && (
          <div>
            <h5 className="text-[13px] text-gray-500 font-medium">Form</h5>
            <div className="pt-1 grid grid-cols-3 gap-3">
              {formBlocks.map((block) => (
                <BlockBtnElement
                  key={block.blockType}
                  formBlock={block}
                  disabled={isPublished}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormBlockBox;
