"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function GeneratePayslipsDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [formData, setFormData] = useState({
    period: "may-2023",
    site: "all-sites",
    includeDetails: true,
    sendEmail: false,
  })

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically generate the payslips
    console.log("Generate payslips with:", formData)

    // Reset form and close dialog
    setFormData({
      period: "may-2023",
      site: "all-sites",
      includeDetails: true,
      sendEmail: false,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Generate Payslips</DialogTitle>
            <DialogDescription>Generate payslips for your construction workers.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="period" className="text-right">
                Pay Period
              </Label>
              <Select value={formData.period} onValueChange={(value) => handleChange("period", value)}>
                <SelectTrigger id="period" className="col-span-3">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="may-2023">May 2023</SelectItem>
                  <SelectItem value="apr-2023">April 2023</SelectItem>
                  <SelectItem value="mar-2023">March 2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="site" className="text-right">
                Site
              </Label>
              <Select value={formData.site} onValueChange={(value) => handleChange("site", value)}>
                <SelectTrigger id="site" className="col-span-3">
                  <SelectValue placeholder="Select site" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-sites">All Sites</SelectItem>
                  <SelectItem value="site-a">Site A</SelectItem>
                  <SelectItem value="site-b">Site B</SelectItem>
                  <SelectItem value="site-c">Site C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Template</Label>
              <Select defaultValue="standard">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Template</SelectItem>
                  <SelectItem value="detailed">Detailed Template</SelectItem>
                  <SelectItem value="simple">Simple Template</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <div className="col-start-2 col-span-3 flex items-center space-x-2">
                <Checkbox
                  id="includeDetails"
                  checked={formData.includeDetails}
                  onCheckedChange={(checked) => handleChange("includeDetails", checked)}
                />
                <Label htmlFor="includeDetails">Include payment details</Label>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <div className="col-start-2 col-span-3 flex items-center space-x-2">
                <Checkbox
                  id="sendEmail"
                  checked={formData.sendEmail}
                  onCheckedChange={(checked) => handleChange("sendEmail", checked)}
                />
                <Label htmlFor="sendEmail">Send via email</Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Generate</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
