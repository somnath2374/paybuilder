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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NewPayrollDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [formData, setFormData] = useState({
    period: "may-2023",
    site: "all-sites",
    startDate: "",
    endDate: "",
    paymentDate: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the payroll data
    console.log("Payroll data:", formData)

    // Reset form and close dialog
    setFormData({
      period: "may-2023",
      site: "all-sites",
      startDate: "",
      endDate: "",
      paymentDate: "",
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Payroll</DialogTitle>
            <DialogDescription>Set up a new payroll period for your construction workers.</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="basic" className="mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 py-4">
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
                    <SelectItem value="jun-2023">June 2023</SelectItem>
                    <SelectItem value="jul-2023">July 2023</SelectItem>
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
                <Label htmlFor="startDate" className="text-right">
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endDate" className="text-right">
                  End Date
                </Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="paymentDate" className="text-right">
                  Payment Date
                </Label>
                <Input
                  id="paymentDate"
                  type="date"
                  value={formData.paymentDate}
                  onChange={(e) => handleChange("paymentDate", e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="overtimeRate" className="text-right">
                  Overtime Rate
                </Label>
                <Input id="overtimeRate" type="number" defaultValue="1.5" min="1" step="0.1" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="taxRate" className="text-right">
                  Tax Rate (%)
                </Label>
                <Input id="taxRate" type="number" defaultValue="20" min="0" max="100" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="approver" className="text-right">
                  Approver
                </Label>
                <Select defaultValue="hr-manager">
                  <SelectTrigger id="approver" className="col-span-3">
                    <SelectValue placeholder="Select approver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hr-manager">HR Manager</SelectItem>
                    <SelectItem value="site-manager">Site Manager</SelectItem>
                    <SelectItem value="finance-director">Finance Director</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="notes" className="text-right">
                  Notes
                </Label>
                <Input id="notes" className="col-span-3" placeholder="Any special instructions or notes" />
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Payroll</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
