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
import { Upload, FileCheck2, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function UploadDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleUpload = async () => {
    if (!fileName) return;

    setIsUploading(true);
    setIsSuccess(false);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    setIsUploading(false);
    setIsSuccess(true);
  };

  const resetState = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(false);
      setUploadProgress(0);
      setFileName("");
    }, 300); // delay to allow dialog to close smoothly
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="h-9 gap-1">
            <Upload className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Upload
            </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
          <DialogDescription>
            Upload your ISP contract or bill in PDF format for analysis.
          </DialogDescription>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <FileCheck2 className="h-16 w-16 text-green-500" />
            <p className="text-lg font-medium">Upload Successful!</p>
            <p className="text-sm text-muted-foreground text-center">
              {fileName} has been uploaded and analyzed. You can now view it on your dashboard.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="document">PDF Document</Label>
              <Input id="document" type="file" accept=".pdf" onChange={handleFileChange} disabled={isUploading} />
            </div>
            {isUploading && (
              <div className="flex flex-col gap-2">
                  <Progress value={uploadProgress} />
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {uploadProgress < 100 ? `Uploading ${fileName}...` : 'Analyzing document...'}
                  </p>
              </div>
            )}
          </div>
        )}

        <DialogFooter>
          {isSuccess ? (
             <Button onClick={resetState}>Close</Button>
          ) : (
            <>
              <Button variant="outline" onClick={resetState} disabled={isUploading}>
                Cancel
              </Button>
              <Button onClick={handleUpload} disabled={isUploading || !fileName}>
                {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Upload
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
