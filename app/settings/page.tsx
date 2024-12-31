import { MainLayout } from '@/components/layout/main-layout'
import { SettingsForm } from '@/components/settings/settings-form'

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <SettingsForm />
      </div>
    </MainLayout>
  )
}

