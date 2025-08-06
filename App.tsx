'use client'

import { useState } from 'react'
import { DashboardLayout } from './components/DashboardLayout'
import { Dashboard } from './components/Dashboard'
import { CampaignDetail } from './components/CampaignDetail'
import { ClientsManagement } from './components/ClientsManagement'
import { ProfileSettings } from './components/ProfileSettings'
import { Toaster } from './components/ui/sonner'

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null)
  
  // Mock user type - in a real app this would come from authentication
  const userType: 'agency' | 'single-client' = 'agency'
  
  // Mock clients data for agency users
  const [selectedClient, setSelectedClient] = useState('1')
  const clients = [
    { id: '1', name: 'TechCorp Inc.', logo: null },
    { id: '2', name: 'Fashion Forward', logo: null },
    { id: '3', name: 'Green Energy Co', logo: null }
  ]

  const handleCampaignClick = (campaignId: string) => {
    setSelectedCampaign(campaignId)
    setCurrentView('campaign-detail')
  }

  const handleBackToDashboard = () => {
    setSelectedCampaign(null)
    setCurrentView('dashboard')
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onCampaignClick={handleCampaignClick} />
      case 'campaign-detail':
        return selectedCampaign ? (
          <CampaignDetail 
            campaignId={selectedCampaign} 
            onBack={handleBackToDashboard}
          />
        ) : null
      case 'campaigns':
        return <Dashboard onCampaignClick={handleCampaignClick} />
      case 'clients':
        return userType === 'agency' ? <ClientsManagement /> : null
      case 'settings':
        return <ProfileSettings />
      default:
        return <Dashboard onCampaignClick={handleCampaignClick} />
    }
  }

  return (
    <div className="size-full">
      <DashboardLayout
        currentView={currentView}
        onViewChange={setCurrentView}
        userType={userType}
        selectedClient={selectedClient}
        onClientChange={setSelectedClient}
        clients={clients}
      >
        {renderContent()}
      </DashboardLayout>
      <Toaster />
    </div>
  )
}