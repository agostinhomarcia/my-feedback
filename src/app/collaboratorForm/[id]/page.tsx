import React from "react";
import ColaboradorForm from "@/components/collaborator/collaboratorForm";

interface CollaboratorEditProps {
  id: string;
  params: any;
}

const CollaboratorEditPage: React.FC<CollaboratorEditProps> = ({ params }) => {
  return (
    <div>
      <ColaboradorForm collaboratorId={params.id} />
    </div>
  );
};

export default CollaboratorEditPage;
