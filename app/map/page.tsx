'use client'

import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { Search, MapPin, User, Megaphone } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { type ViewMode } from "@/types"

const PALLADIUM_PROMOTIONS = [
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

const LUCKNOW_PROMOTIONS = [
  {
    id: '1',
    storeName: 'H&M',
    description: 'Season End Sale',
    discount: '50% OFF'
  },
  {
    id: '2',
    storeName: 'Westside',
    description: 'Festive Collection',
    discount: '30% OFF'
  },
  {
    id: '3',
    storeName: 'Zudio',
    description: 'New Arrivals',
    discount: '20% OFF'
  }
]

export default function MapPage() {
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<ViewMode['type']>('top')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMall, setSelectedMall] = useState('Phoenix Mall - Palladium')

  // Initialize selected mall based on URL parameter
  useEffect(() => {
    const mall = searchParams.get('mall')
    if (mall === 'lucknow') {
      setSelectedMall('Phoenix Mall - Lucknow')
    } else if (mall === 'palladium') {
      setSelectedMall('Phoenix Mall - Palladium')
    }
  }, [searchParams])

  // Determine color scheme based on selected mall
  const colorScheme = selectedMall === 'Phoenix Mall - Lucknow' 
    ? 'bg-sky-100' // Light blue for Lucknow
    : 'bg-emerald-100' // Original emerald for Palladium

  // Determine text highlight color based on selected mall
  const highlightColor = selectedMall === 'Phoenix Mall - Lucknow'
    ? 'text-sky-600' // Blue text for Lucknow
    : 'text-emerald-600' // Original emerald text for Palladium

  // Determine map background color based on selected mall
  const mapBackgroundColor = selectedMall === 'Phoenix Mall - Lucknow'
    ? 'bg-sky-50' // Light blue background for Lucknow
    : 'bg-gray-100' // Original gray background for Palladium

  // Determine which promotions to show based on selected mall
  const currentPromotions = selectedMall === 'Phoenix Mall - Lucknow' 
    ? LUCKNOW_PROMOTIONS 
    : PALLADIUM_PROMOTIONS

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={colorScheme}>
        <div className="flex items-center gap-2 p-4">
          <Image
            src="/images/logo.png"
            alt="MapAisle Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <select 
            className="bg-transparent text-lg font-semibold"
            value={selectedMall}
            onChange={(e) => setSelectedMall(e.target.value)}
          >
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
      <div className={`relative flex-1 ${mapBackgroundColor}`}>
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
            src={selectedMall === 'Phoenix Mall - Lucknow' 
              ? "/images/lucknow-mall-top-view.png"
              : "/images/mall-top-view.png"
            }
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
          {currentPromotions.map((promo) => (
            <div
              key={promo.id}
              className="flex-shrink-0 w-64 p-4 border rounded-lg"
            >
              <h3 className="font-semibold">{promo.storeName}</h3>
              <p className="text-sm text-muted-foreground">{promo.description}</p>
              <p className={`font-bold mt-2 ${highlightColor}`}>{promo.discount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="p-4 bg-white border-t">
        <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[
            {
              id: '1',
              name: 'Winter Wonderland',
              date: 'Dec 15 - Dec 25',
              description: 'Magical winter-themed decorations and special performances'
            },
            {
              id: '2',
              name: 'Beer Festival',
              date: 'Nov 10 - Nov 12',
              description: 'Featuring craft beers from local breweries'
            },
            {
              id: '3',
              name: 'Food Carnival',
              date: 'Nov 25 - Nov 26',
              description: 'International cuisine from mall restaurants'
            }
          ].map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-64 p-4 border rounded-lg"
            >
              <h3 className="font-semibold">{event.name}</h3>
              <p className={`font-medium ${highlightColor}`}>{event.date}</p>
              <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={colorScheme}>
        <div className="flex justify-around p-4">
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

