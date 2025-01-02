// src/app/lab/[project]/page.tsx
export default function LabProjectPage({ params }: { params: { project: string } }) {
    const { project } = params;
  
    return (
      <div>
        <h1>Project: {project}</h1>
        <p>Details about the project {project}.</p>
      </div>
    );
  }
  