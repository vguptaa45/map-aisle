'use client'

import { useState } from "react"
import { Search, MapPin, User, Megaphone } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { type ViewMode } from "@/types"

const MOCK_PROMOTIONS = [
  {
    id: '1',
    storeName: 'Coach',
    description: 'Summer Sale',
    discount: '30% OFF'
  },
  {
    id: '2',
    storeName: 'Ralph Lauren',
    description: 'New Collection',
    discount: '20% OFF'
  },
  {
    id: '3',
    storeName: 'Armani',
    description: 'Weekend Special',
    discount: '25% OFF'
  }
]

export default function MapPage() {
  const [viewMode, setViewMode] = useState<ViewMode['type']>('top')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-emerald-100 p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="MapAisle Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <select className="bg-transparent text-lg font-semibold">
            <option>Phoenix Mall - Palladium</option>
            <option>Phoenix Mall - Lucknow</option>
          </select>
        </div>
      </header>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search stores..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Map View */}
      <div className="relative flex-1 bg-gray-100">
        <div className="absolute right-4 top-4 flex items-center space-x-2">
          <Switch
            id="view-mode"
            checked={viewMode === 'front'}
            onCheckedChange={(checked) => setViewMode(checked ? 'front' : 'top')}
          />
          <Label htmlFor="view-mode">Front View</Label>
        </div>
        
        {viewMode === 'top' ? (
          <Image
            src="/images/mall-top-view.png"
            alt="Mall Top View"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src="/images/mall-front-view.png"
            alt="Mall Front View"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Promotions */}
      <div className="p-4 bg-white">
        <h2 className="text-lg font-semibold mb-4">Promotions</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {MOCK_PROMOTIONS.map((promo) => (
            <div
              key={promo.id}
              className="flex-shrink-0 w-64 p-4 border rounded-lg"
            >
              <h3 className="font-semibold">{promo.storeName}</h3>
              <p className="text-sm text-muted-foreground">{promo.description}</p>
              <p className="text-emerald-600 font-bold mt-2">{promo.discount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-emerald-100 p-4">
        <div className="flex justify-around">
          <Button variant="ghost" size="icon">
            <Megaphone className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <MapPin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </div>
  )
}

