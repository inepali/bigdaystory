import React from 'react';
import { Avatar } from '../components/Avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '../components/dropdown';
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '../components/Navbar';
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '../components/sidebar';
import { SidebarLayout } from '../components/SidebarLayout';
import { ArrowRightStartOnRectangleIcon, ChevronUpIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import {
  ClipboardDocumentIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import { UserType } from '../types/auth';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/images/logo.png';
import { doSignOut } from '../firebase/auth';
import { Link } from 'react-router-dom';

function AccountDropdownMenu({ anchor }: { anchor: 'top start' | 'bottom end' }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem to="/profile">
        <UserCircleIcon />
        <DropdownLabel>My account</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={() => doSignOut()}>
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Sign out</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

export default function MainLayout({ children }) {
  const auth = useAuth();
  const currentUser = auth?.currentUser as UserType;
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src={currentUser.photoURL} square />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarItem className="self-center">
              <img src={Logo} alt="Logo" />
            </SidebarItem>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <Link to="dashboard">
                <SidebarItem>
                  <HomeIcon />
                  <SidebarLabel>Home</SidebarLabel>
                </SidebarItem>
              </Link>
              <Link to="projects">
                <SidebarItem>
                  <ClipboardDocumentIcon />
                  <SidebarLabel>Projects</SidebarLabel>
                </SidebarItem>
              </Link>
              <Link to="vendors">
                <SidebarItem>
                  <UsersIcon />
                  <SidebarLabel>Vendors</SidebarLabel>
                </SidebarItem>
              </Link>
            </SidebarSection>
            <SidebarSpacer />

            <SidebarSection>
              <SidebarItem href="#">
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="#">
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src={currentUser.photoURL} className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      {currentUser.displayName}
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      {currentUser.email}
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
