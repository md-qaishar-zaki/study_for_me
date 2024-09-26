import React from 'react';
import Button from './Button';

export default function ProjectSidebar() {
  return (
    <>
    <div className="sideBar">
        <h2>New Project</h2>
        <Button BtnName={'+Add Project'} />
    </div>
    </>
  )
}
