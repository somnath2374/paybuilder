"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import { DropdownMenuContent } from "@/components/ui/dropdown-menu"

import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { DropdownMenu } from "@/components/ui/dropdown-menu"

import { useState } from "react"
import { Download, FileText, Filter, Printer, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ConstructionAnimation } from "@/components/construction-animation"
import { GeneratePayslipsDialog } from "@/components/generate-payslips-dialog"

export function PayslipsPage() {
  const [showGeneratePayslips, setShowGeneratePayslips] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [periodFilter, setPeriodFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Sample payslips data
  const payslips = [
    {
      worker: "John Smith",
      id: "W-1234",
      period: "Apr 1-30, 2023",
      amount: "$3,450",
      status: "Paid",
      date: "May 5, 2023",
    },
    {
      worker: "Maria Garcia",
      id: "W-1235",
      period: "Apr 1-30, 2023",
      amount: "$4,200",
      status: "Paid",
      date: "May 5, 2023",
    },
    {
      worker: "Robert Johnson",
      id: "W-1236",
      period: "Apr 1-30, 2023",
      amount: "$3,800",
      status: "Paid",
      date: "May 5, 2023",
    },
    {
      worker: "Sarah Williams",
      id: "W-1237",
      period: "Apr 1-30, 2023",
      amount: "$3,950",
      status: "Pending",
      date: "May 15, 2023",
    },
    {
      worker: "David Brown",
      id: "W-1238",
      period: "Apr 1-30, 2023",
      amount: "$4,100",
      status: "Pending",
      date: "May 15, 2023",
    },
    {
      worker: "Michael Lee",
      id: "W-1239",
      period: "Mar 1-31, 2023",
      amount: "$3,875",
      status: "Paid",
      date: "Apr 5, 2023",
    },
    {
      worker: "Jennifer Taylor",
      id: "W-1240",
      period: "Mar 1-31, 2023",
      amount: "$4,050",
      status: "Paid",
      date: "Apr 5, 2023",
    },
    {
      worker: "James Wilson",
      id: "W-1241",
      period: "Mar 1-31, 2023",
      amount: "$3,725",
      status: "Paid",
      date: "Apr 5, 2023",
    },
  ]

  // Filter payslips based on search query and filters
  const filteredPayslips = payslips.filter((payslip) => {
    const matchesSearch =
      payslip.worker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payslip.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPeriod = periodFilter === "all" || payslip.period.includes(periodFilter)
    const matchesStatus = statusFilter === "all" || payslip.status === statusFilter

    return matchesSearch && matchesPeriod && matchesStatus
  })

  // Count payslips by status
  const paidCount = payslips.filter((p) => p.status === "Paid").length
  const pendingCount = payslips.filter((p) => p.status === "Pending").length

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Payslips Management</h2>
          <p className="text-muted-foreground">Generate and manage payslips for your construction workers</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowGeneratePayslips(true)}>
            <FileText className="mr-2 h-4 w-4" />
            Generate Payslips
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Payslips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payslips.length}</div>
            <p className="text-xs text-muted-foreground">Last 3 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Paid Payslips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{paidCount}</div>
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: `${(paidCount / payslips.length) * 100}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {Math.round((paidCount / payslips.length) * 100)}% of total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Payslips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCount}</div>
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-yellow-500"
                style={{ width: `${(pendingCount / payslips.length) * 100}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Due in 8 days</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Payslips</CardTitle>
            <CardDescription>View and download payslips for your workers</CardDescription>
          </div>
          <div className="hidden md:block">
            <ConstructionAnimation />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search payslips..."
                  className="w-full pl-8 sm:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setStatusFilter("all")}>All Statuses</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("Paid")}>Paid Only</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("Pending")}>Pending Only</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-2">
              <Select value={periodFilter} onValueChange={setPeriodFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Periods</SelectItem>
                  <SelectItem value="Apr">April 2023</SelectItem>
                  <SelectItem value="Mar">March 2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Worker</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Pay Period</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayslips.map((payslip, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{payslip.worker}</TableCell>
                    <TableCell>{payslip.id}</TableCell>
                    <TableCell>{payslip.period}</TableCell>
                    <TableCell>{payslip.amount}</TableCell>
                    <TableCell>
                      <Badge variant={payslip.status === "Paid" ? "default" : "outline"}>{payslip.status}</Badge>
                    </TableCell>
                    <TableCell>{payslip.date}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <GeneratePayslipsDialog open={showGeneratePayslips} onOpenChange={setShowGeneratePayslips} />
    </div>
  )
}
