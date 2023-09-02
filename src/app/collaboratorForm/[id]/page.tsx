"use client";
import ColaboradorForm from "@/components/collaborator/collaboratorForm";

interface CollaboratorEditProps {
  id: string;
  params: any;
}
const EditCollaboratorPage: React.FC<CollaboratorEditProps> = ({ params }) => {
  return (
    <div>
      <ColaboradorForm collaboratorId={params.id} />
    </div>
  );
};

export default EditCollaboratorPage;
