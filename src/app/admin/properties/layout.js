import AdminLayout from '@/components/AdminLayout'

export const metadata = {
  title: 'Admin Page',
}

export default function AdminLayoutPage({ children }) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  )
}
