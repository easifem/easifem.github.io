import Link from "@docusaurus/Link";
import React from "react";
import { Monitor, Server, Award, Cpu, HardDrive } from "react-feather";

// Map of distro names to react-feather icons
const iconMap = {
  'Ubuntu': Server,
  'Archlinux': Cpu,
  'Fedora': Server,
  'Debian': Server,
  'M1/M2 chip(ARM64)': Monitor,
  'Intel chip(AMD64, x86)': HardDrive
};

function SDK({ name, to }: { name: string; to?: string }) {
  const IconComponent = iconMap[name] || Award;
  
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <IconComponent className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function Install() {
  return (
    <section className="mx-auto mt-10 mb-4 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        Installation
      </span>

      <h3 className="mb-12 text-4xl">Install easifem ☀️</h3>

      <div className="mb-10">
        <h4 className="mb-2 text-2xl">Linux</h4>

        <p className="mb-6 text-text-400">
          Select your <span className="font-semibold">Linux</span> distro and follow the easy installation instructions.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="Ubuntu"
            to="/guides/getting-started/ubuntu"
          />
          <SDK
            name="Archlinux"
            to="/guides/getting-started/archlinux"
          />
          <SDK
            name="Fedora"
            to="/guides/getting-started/fedora"
          />
          <SDK
            name="Debian"
            to="/guides/getting-started/debian"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-2xl">MacOS</h4>

        <p className="mb-6 text-text-400">
          Select the <span className="font-semibold">architecture</span> of your MacOS and follow the instructions.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="M1/M2 chip(ARM64)"
            to="/guides/getting-started/macosx"
          />
          <SDK
            name="Intel chip(AMD64, x86)"
            to="/guides/getting-started/macosx"
          />
        </div>
      </div>
    </section>
  );
}
