import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          category: string
          images: string[]
          stock: number
          drop_name: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          category: string
          images: string[]
          stock: number
          drop_name: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          category?: string
          images?: string[]
          stock?: number
          drop_name?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_email: string
          items: any[]
          total_price: number
          status: 'pending' | 'paid' | 'shipped'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_email: string
          items: any[]
          total_price: number
          status?: 'pending' | 'paid' | 'shipped'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_email?: string
          items?: any[]
          total_price?: number
          status?: 'pending' | 'paid' | 'shipped'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
