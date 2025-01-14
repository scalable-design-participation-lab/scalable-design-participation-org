export interface Project {
    image: string
    title: string
    description: string
    tags: string[]
  }
  
  export interface TeamMember {
    name: string
    url?: string
  }
  
  export interface NavLink {
    text: string
    url: string
  }
  
  export interface Tile {
    title: string
    description: string[]
  }