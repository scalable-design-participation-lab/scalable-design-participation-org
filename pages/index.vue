<template>
    <div class="leading-tight mb-24">

      <!-- header -->
      <div class="ml-7">
        <img
        class="my-12 h-12 hover:animate-bounce"
        src="/images/lab-logo.png"
        logo-alt="Scalable Design Participation Lab Logo"
      />
        <div class="pl-1 md:w-6/12 md:max-w-[820px] space-y-2 text-3xl">
            <p>Scalable Design Participation is a Research Lab at Northeastern University in Boston. We develop digital tools that enable large groups of people to shape their own environments.</p>
        </div>
      </div>
  
      <div class="mt-16 md:w-8/12 md:max-w-[1100px] px-7">
          <img :src="headerImage" alt="" class="w-full rounded-md">
          </div>
            
      </div>

      <!-- focus -->
      <UDivider class="mt-24 mb-8" />

      <div class="ml-7 md:w-8/12 md:max-w-[800px]">
        <div class="space-y-2">
          <h1 class="mt-12 mb-2 text-3xl">The big picture</h1>
          <p class="text-xl leading-tight">Within the next 40 years, we will see more urban fabric built than we have in the whole of human history. Such rapid urbanization is already occurring in most of the world—informally and without the guidance of planners, architects, or scientists, whilst further perpetuating existing structural inequities within our cities and social systems.</p>
          <p class="text-xl leading-tight">Because of policy exclusion, social stigma, and economic forces, vulnerable populations will continue to be displaced to environmentally exposed places, as large-scale technocratic infrastructural and design interventions continue to shape our response to the climate crisis.</p>
        </div>
        <div class="space-y-2">
          <h1 class="mt-12 mb-2 text-3xl">Our approach</h1>
          <p class="text-xl leading-tight">We aim to advance the edge of how computing, public service, planning technologies, and design can be employed in planning and urban design practice as a medium to allow the broadest set of community members to shape their own environments sustainably, equitably, and holistically with the support of computational intelligence.</p>
          <p class="text-xl leading-tight">Our work connects traditions of participation and community design in planning with research in collaborative computing and participatory AI to offer both, a framework for incorporating user participation in the development of planning technologies, and computational tools to facilitate large scale community participation in planning with the support of large-scale modeling and civic data production.</p>
          <p class="text-xl leading-tight">Through a growing number of partnerships with local and federal governments, non-profits and local organizations, we have—powered by open-source software—implemented this research on-the-ground in service of justice-centered computational planning and design practices.</p>
        </div>
      </div> 
  
      <!-- tiles -->
      <UDivider class="mt-24 mb-8" />
  
      <div class="px-7 md:flex space-y-3 md:space-x-6 md:space-y-0">
        <div class="p-8 border border-zinc-200 dark:border-zinc-600 md:w-56 min-h-full rounded-xl md:pb-32">
          <h2 class="font-semibold text-xl mb-2 leading-tight">Civic <span class="md:block">Technology</span></h2>
          <p class="text-sm leading-tight">Our research explores computing interfaces that mediate new forms of community engagement between and among residents, grassroots organizations and municipal institutions. We extend practices in participatory design to the design of software and hardware—which is itself a growing part of urban infrastructure, to develop new digital platforms that enabled a large-scale community-led design process.</p>
        </div>
        <div class="p-8 border border-zinc-200 dark:border-zinc-600 md:w-56 min-h-full rounded-xl">
          <h2 class="font-semibold text-xl mb-2 leading-tight">Collaborative <span class="md:block">Tools</span></h2>
          <p class="text-sm leading-tight">Our tools allow thousands of users to simultaneously work together in a collective deliberative planning and design process. Through online real-time, shared visualization planning and design platforms that are accessible to stakeholders, planners, and the community, we provide them with insights of the ecological impacts, solutions, and trade-offs of planning interventions in real-time.</p>
        </div>
        <div class="p-8 border border-zinc-200 dark:border-zinc-600 md:w-56 min-h-full rounded-xl">
          <h2 class="font-semibold text-xl mb-2 leading-tight">Participatory <span class="md:block">AI Models</span></h2>
          <p class="text-sm leading-tight">Through strong community partnerships, participatory design approaches, and with the support of my collaborative computing platforms, we explore the essential role that community-engaged research has in the development of AI models to collect and produce civic data of under-represented populations in the Majority World and to contextually study resident-led issues.</p>
        </div>
        <div class="p-8 border border-zinc-200 dark:border-zinc-600 md:w-56 min-h-full rounded-xl">
          <h2 class="font-semibold text-xl mb-2 leading-tight"><span class="md:block">Geospatial Computing</span></h2>
          <p class="text-sm leading-tight">This work brings forth the potential for technology to focus on pluralism, collaboration, and transparency in the service of justice in the built environment. Our interfaces focuse on drawing as an intuitive interface between citizens, spatial data, and planning practitioners, coupled with novel computational representations, modes of interaction, and computational interfaces, to encourage public participation in data-driven analysis and design.</p>
        </div>
      </div>
    
      <!-- projects -->
      <UDivider class="mt-24 mb-8" />

      <div class="grid md:grid-cols-2 xl:grid-cols-3 mx-7 md:w-8/12 md:max-w-[1200px] gap-8">
        <div class="border rounded-xl space-y-2 p-4 leading-tight">
          <img class="mb-16" src="/images/projects/drawing-participation.jpg" alt="Drawing Participation">
          <div class="flex space-x-1">
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">Software</span>
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">2020–today</span>
          </div>
          <h2 class="pt-2 text-xl">Drawing Participation</h2>
          <p class="pb-4">Real-time collaboration for interactive mapping participation with version control</p>
        </div>

        <div class="border rounded-xl space-y-2 p-4 leading-tight">
          <img class="mb-16" src="/images/projects/reblocking.jpg" alt="Reblocking">
          <div class="flex space-x-1">
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">Software</span>
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">2021–today</span>
          </div>
          <h2 class="pt-2 text-xl">Reblocking a Million Neighborhoods</h2>
          <p class="pb-4">Creating parcel data from satellite imagery for data-scarce environments through generative ensemble learning</p>
        </div>

        <div class="border rounded-xl space-y-2 p-4 leading-tight">
          <img class="mb-16" src="/images/projects/open-sensing.jpg" alt="Open Sensing">
          <div class="flex space-x-1">
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">Hardware</span>
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">2023–today</span>
          </div>
          <h2 class="pt-2 text-xl">Open Sensing</h2>
          <p class="pb-4">Open hardware and software for environmental sensing within local communities</p>
        </div>

        <div class="border rounded-xl space-y-2 p-4 leading-tight">
          <img class="mb-16" src="/images/projects/site-allocation.jpg" alt="Site Allocation">
          <div class="flex space-x-1">
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">Software</span>
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">2023–today</span>
          </div>
          <h2 class="pt-2 text-xl">Site Allocation</h2>
          <p class="pb-4">Identifying potential sites for community organizations through interactive optimization</p>
        </div>

        <div class="border rounded-xl space-y-2 p-4 leading-tight">
          <img class="mb-16" src="/images/projects/food-for-thought.jpg" alt="Food for Thought">
          <div class="flex space-x-1">
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">Software</span>
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">2023–24</span>
          </div>
          <h2 class="pt-2 text-xl">Food for Thought</h2>
          <p class="pb-4">Interactive community outreach and engagement for NYC’s Green City Force</p>
        </div>

        <div class="border rounded-xl space-y-2 p-4 leading-tight">
          <img class="mb-16" src="/images/projects/local-software.jpg" alt="Local Software">
          <div class="flex space-x-1">
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">Software</span>
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">2015–20</span>
          </div>
          <h2 class="pt-2 text-xl">Local Software</h2>
          <p class="pb-4">CAD and GIS plugins to seamlessly connect design tools with spatial analysis.</p>
        </div>

        <div class="border rounded-xl space-y-2 p-4 leading-tight">
          <img class="mb-16" src="/images/projects/painting-with-data.jpg" alt="Painting with Data">
          <div class="flex space-x-1">
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">Software</span>
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">2015–19</span>
          </div>
          <h2 class="pt-2 text-xl">Painting with Data</h2>
          <p class="pb-4">Visually-based approach to spatial analysis and mapping, dramatically reducing the learning curve for GIS software</p>
        </div>

        <div class="border rounded-xl space-y-2 p-4 leading-tight">
          <img class="mb-16" src="/images/projects/computer-map.jpg" alt="Drawing Participation">
          <div class="flex space-x-1">
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">Book</span>
            <span class="mt-6 text-sm border rounded-full py-1.5 px-3">2018–today</span>
          </div>
          <h2 class="pt-2 text-xl">Drawing out the Computer Map</h2>
          <p class="pb-4">Computing and community participation in the design of the built environment, a historic and contemporary overview</p>
        </div>
      </div>
      
      <!-- output -->
      <UDivider class="mt-24 mb-8" />
      
      <div class="mx-7 md:w-8/12 md:max-w-[800px]">
          <h1 class="mt-12 mb-2 text-3xl">Our output</h1>
          <p class="text-xl leading-tight">We believe in open source, open data, and open learning. We publish our work through multiple channels—no matter if software code, hardware manuals, computational models, or scientific publications.</p>
          <div class="flex space-x-2 mt-6">
            <UButton
          class="my-2 py-3 px-6 rounded-full flex place-self-start hover:bg-gray-300 hover:text-black dark:hover:bg-zinc-700 dark:hover:text-white"
          color="black"
          to="/"
        >
        Code
        </UButton>
        <UButton
          class="my-2 py-3 px-6 rounded-full flex place-self-start bg-gray-300 dark:bg-zinc-600 dark:text-white text-black hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white"
          color="black"
          to="/map/"
        >
        Models
        </UButton>
        <UButton
          class="my-2 py-3 px-6 rounded-full flex place-self-start bg-gray-300 dark:bg-zinc-600 dark:text-white text-black hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white"
          color="black"
          to="/map/"
        >
        Publications
        </UButton>
      </div>
      </div>
      
      <!-- about -->
      <UDivider class="mt-24 mb-8" />
      
      <div class="mx-7 md:w-8/12 md:max-w-[800px]">
          <h1 class="mt-12 mb-2 text-3xl">About us</h1>
          <p class="text-xl leading-tight mb-3">We are 
            <a href="https://camd.northeastern.edu/people/carlos-sandoval-olascoaga/" target="_blank" class="hover:underline">Carlos Sandoval Olascoaga↗</a>, 
            <a href="https://leonardschrage.com/" target="_blank" class="hover:underline">Leonard Schrage↗</a>, 
            Reid Kovacs, 
            Felipe Cordera Urrutia, 
            <a href="https://katelynrmcvay.wixsite.com/site" target="_blank" class="hover:underline">Katelyn McVay↗</a>, 
            <a href="https://www.demircantas.com/" target="_blank" class="hover:underline">Demircan Tas↗</a>, 
            Chucho Ocampo,
            Dezeng Kong, 
            and Bill Ngo.</p>
            <p class="text-xl leading-tight">We are located at Northeastern University in Boston, where we are affiliated with the College of Arts, Media and Design (CAMD) and the College of Computer Sciences (Khoury). Our team has a core expertise in computer science, urban planning, and architecture.</p>
      </div>

      <!-- contact -->  
      <div class="mx-7 md:w-8/12 md:max-w-[800px]">
          <h1 class="mt-12 mb-2 text-3xl">Let’s talk</h1>
          <p class="text-xl leading-tight">We are open for collaboration and partnerships and would love to hear from you. We give global lectures about our work globally and are continuously looking for researchers, post-docs, PhD students and student co-ops with a focus on software design and development, computer vision and machine learning, computational urban science, and related fields.</p>
          <div class="flex space-x-2 mt-6">
            <UButton
          class="my-2 py-3 px-6 rounded-full flex place-self-start hover:bg-gray-300 hover:text-black dark:hover:bg-zinc-700 dark:hover:text-white"
          color="black"
          to="/"
        >
        Get in touch
        </UButton>
      </div>
      </div>

      <!-- footer -->
      <UDivider class="mt-24 mb-8" />
  
      <div class="px-7 mb-16">
      <div class="md:flex place-items-center justify-between">
        <h1 class="text-2xl leading-tight text-zinc-900 dark:text-white">Scalable Design Participation Lab</h1>
        <div class="flex space-x-6 md:pr-2 !place-items-center">
          <a href="https://www.northeastern.edu" target="_blank"><img src="/images/neu-logo-text.svg" alt="Northeastern University Logo" class="hover:scale-105 dark:invert"></a>
        </div>
      </div>

      <div class="ml-7 md:w-8/12 md:max-w-[800px]">
        <div class="space-y-2">
          <h2 class="mt-12 mb-2 text-xl">Our Newsletter</h2>
          <form action=""></form>
        </div>
      </div>

      <div class="mt-12 md:mt-24 space-y-1 flex flex-col leading-tight">
        <a href="#" class="hover:underline">Focus</a>
        <a href="#" class="hover:underline">Projects</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Publications</a>
        <a href="#" class="hover:underline">Contact</a>
      </div>


    </div>
  </template>
  
  <script setup>
  const images = [
    'mexico-city.jpg',
    'new-york.jpg',
    'berlin.jpg',
    'monterrey.jpg',
    'addis-ababa.jpg',
    'freetown.jpg'
  ]
  
  const headerImage = computed(() => {
    const randomIndex = Math.floor(Math.random() * images.length)
    return `/images/cities/${images[randomIndex]}`
  })
  </script>
  