class ProjectsClass {
  image: string
  title: string
  description: string
  languages: string[]
  vercelUrl: string
  githubUrl: string
  closeButton: string

  constructor(
    image: string,
    title: string,
    description: string,
    languages: string[],
    vercelUrl: string,
    githubUrl: string,
    closeButton: string
  ) {
    this.image = image
    this.title = title
    this.description = description
    this.languages = languages
    this.vercelUrl = vercelUrl
    this.githubUrl = githubUrl
    this.closeButton = closeButton
  }
}

export default ProjectsClass
