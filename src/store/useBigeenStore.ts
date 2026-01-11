import { create } from "zustand"

interface BigeenState {
  // Contact Form State
  contactForm: {
    fullName: string
    workEmail: string
    companyName: string
    topic: string
    message: string
  }
  setContactFormField: (
    field: keyof BigeenState["contactForm"],
    value: string
  ) => void
  resetContactForm: () => void

  // FAQ State
  expandedFaq: number | null
  setExpandedFaq: (index: number | null) => void

  // Navigation State
  activeSection: string
  setActiveSection: (section: string) => void
}

const initialContactForm = {
  fullName: "",
  workEmail: "",
  companyName: "",
  topic: "",
  message: "",
}

export const useBigeenStore = create<BigeenState>((set) => ({
  // Contact Form
  contactForm: initialContactForm,
  setContactFormField: (field, value) =>
    set((state) => ({
      contactForm: { ...state.contactForm, [field]: value },
    })),
  resetContactForm: () => set({ contactForm: initialContactForm }),

  // FAQ
  expandedFaq: null,
  setExpandedFaq: (index) => set({ expandedFaq: index }),

  // Navigation
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}))
