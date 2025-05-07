"use client"

import { useState } from "react"
import { Filter, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { AddWorkerDialog } from "@/components/add-worker-dialog"
import { ConstructionAnimation } from "@/components/construction-animation"

export function WorkersPage() {
  const [showAddWorker, setShowAddWorker] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [siteFilter, setSiteFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Sample worker data
  const workers = [
    {
      name: "John Smith",
      id: "W-1234",
      position: "Foreman",
      site: "Site A",
      rate: "$28.50",
      status: "Active",
    },
    {
      name: "Maria Garcia",
      id: "W-1235",
      position: "Electrician",
      site: "Site B",
      rate: "$32.75",
      status: "Active",
    },
    {
      name: "Robert Johnson",
      id: "W-1236",
      position: "Carpenter",
      site: "Site A",
      rate: "$26.50",
      status: "Active",
    },
    {
      name: "Sarah Williams",
      id: "W-1237",
      position: "Plumber",
      site: "Site C",
      rate: "$30.25",
      status: "Active",
    },
    {
      name: "David Brown",
      id: "W-1238",
      position: "Laborer",
      site: "Site B",
      rate: "$22.00",
      status: "Inactive",
    },
    {
      name: "Michael Lee",
      id: "W-1239",
      position: "Welder",
      site: "Site A",
      rate: "$29.75",
      status: "Active",
    },
    {
      name: "Jennifer Taylor",
      id: "W-1240",
      position: "Equipment Operator",
      site: "Site C",
      rate: "$27.50",
      status: "Active",
    },
    {
      name: "James Wilson",
      id: "W-1241",
      position: "Electrician",
      site: "Site B",
      rate: "$31.25",
      status: "Inactive",
    },
  ]

  // Filter workers based on search query and filters
  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.position.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSite = siteFilter === "all" || worker.site === siteFilter
    const matchesStatus = statusFilter === "all" || worker.status === statusFilter

    return matchesSearch && matchesSite && matchesStatus
  })

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Workers Management</h2>
          <p className="text-muted-foreground">Manage your construction workers and their details</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowAddWorker(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Worker
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Workers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{workers.length}</div>
            <p className="text-xs text-muted-foreground">
              {workers.filter((w) => w.status === "Active").length} active workers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Hourly Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$28.56</div>
            <p className="text-xs text-muted-foreground">+$1.25 from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Workers by Site</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">Site A: {workers.filter((w) => w.site === "Site A").length}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">Site B: {workers.filter((w) => w.site === "Site B").length}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <span className="text-sm">Site C: {workers.filter((w) => w.site === "Site C").length}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Workers Directory</CardTitle>
            <CardDescription>View and manage all your construction workers</CardDescription>
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
                  placeholder="Search workers..."
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
                  <DropdownMenuItem onClick={() => setStatusFilter("all")}>All Workers</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("Active")}>Active Workers</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("Inactive")}>Inactive Workers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-2">
              <Select value={siteFilter} onValueChange={setSiteFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by site" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sites</SelectItem>
                  <SelectItem value="Site A">Site A</SelectItem>
                  <SelectItem value="Site B">Site B</SelectItem>
                  <SelectItem value="Site C">Site C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Site</TableHead>
                  <TableHead>Hourly Rate</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkers.map((worker, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{worker.name}</TableCell>
                    <TableCell>{worker.id}</TableCell>
                    <TableCell>{worker.position}</TableCell>
                    <TableCell>{worker.site}</TableCell>
                    <TableCell>{worker.rate}</TableCell>
                    <TableCell>
                      <Badge variant={worker.status === "Active" ? "default" : "secondary"}>{worker.status}</Badge>
                    </TableCell>
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

      <AddWorkerDialog open={showAddWorker} onOpenChange={setShowAddWorker} />
    </div>
  )
}
