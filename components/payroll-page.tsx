"use client"

import { useState } from "react"
import { Calendar, CreditCard, Download, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { NewPayrollDialog } from "@/components/new-payroll-dialog"
import { ConstructionAnimation } from "@/components/construction-animation"

export function PayrollPage() {
  const [showNewPayroll, setShowNewPayroll] = useState(false)
  const [periodFilter, setPeriodFilter] = useState("may-2023")
  const [siteFilter, setSiteFilter] = useState("all-sites")

  // Sample payroll data
  const payrollData = [
    {
      name: "John Smith",
      position: "Foreman",
      regular: "160",
      overtime: "12",
      bonus: "$250",
      gross: "$5,102",
    },
    {
      name: "Maria Garcia",
      position: "Electrician",
      regular: "160",
      overtime: "8",
      bonus: "$0",
      gross: "$5,464",
    },
    {
      name: "Robert Johnson",
      position: "Carpenter",
      regular: "152",
      overtime: "0",
      bonus: "$150",
      gross: "$4,180",
    },
    {
      name: "Sarah Williams",
      position: "Plumber",
      regular: "160",
      overtime: "16",
      bonus: "$200",
      gross: "$5,448",
    },
    {
      name: "David Brown",
      position: "Laborer",
      regular: "160",
      overtime: "24",
      bonus: "$0",
      gross: "$4,048",
    },
    {
      name: "Michael Lee",
      position: "Welder",
      regular: "160",
      overtime: "10",
      bonus: "$175",
      gross: "$4,975",
    },
    {
      name: "Jennifer Taylor",
      position: "Equipment Operator",
      regular: "152",
      overtime: "8",
      bonus: "$0",
      gross: "$4,400",
    },
    {
      name: "James Wilson",
      position: "Electrician",
      regular: "144",
      overtime: "0",
      bonus: "$0",
      gross: "$4,320",
    },
  ]

  // Calculate total payroll amount
  const totalPayroll = payrollData.reduce((sum, worker) => {
    const amount = Number.parseFloat(worker.gross.replace("$", "").replace(",", ""))
    return sum + amount
  }, 0)

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Payroll Management</h2>
          <p className="text-muted-foreground">Process and manage payroll for your construction workers</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowNewPayroll(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Payroll
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Payroll Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPayroll.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              For {periodFilter === "may-2023" ? "May 2023" : periodFilter === "apr-2023" ? "April 2023" : "March 2023"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Next Payday</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-2xl font-bold">May 15</div>
              <p className="text-xs text-muted-foreground">8 days remaining</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Payroll Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                In Progress
              </Badge>
              <span className="text-sm font-medium">Awaiting Approval</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-3/4 rounded-full bg-blue-500"></div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">75% complete</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Current Payroll Period</CardTitle>
            <CardDescription>Manage worker hours, bonuses, and gross pay</CardDescription>
          </div>
          <div className="hidden md:block">
            <ConstructionAnimation />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Select value={periodFilter} onValueChange={setPeriodFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="may-2023">May 2023</SelectItem>
                  <SelectItem value="apr-2023">April 2023</SelectItem>
                  <SelectItem value="mar-2023">March 2023</SelectItem>
                </SelectContent>
              </Select>
              <Select value={siteFilter} onValueChange={setSiteFilter}>
                <SelectTrigger className="w-[180px]">
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
            <div className="flex items-center gap-2">
              <Button>
                <CreditCard className="mr-2 h-4 w-4" />
                Process Payroll
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="mt-4 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Regular Hours</TableHead>
                  <TableHead>Overtime Hours</TableHead>
                  <TableHead>Bonus</TableHead>
                  <TableHead>Gross Pay</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollData.map((payroll, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{payroll.name}</TableCell>
                    <TableCell>{payroll.position}</TableCell>
                    <TableCell>{payroll.regular}</TableCell>
                    <TableCell>{payroll.overtime}</TableCell>
                    <TableCell>{payroll.bonus}</TableCell>
                    <TableCell>{payroll.gross}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <NewPayrollDialog open={showNewPayroll} onOpenChange={setShowNewPayroll} />
    </div>
  )
}
