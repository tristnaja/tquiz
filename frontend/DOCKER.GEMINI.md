# Docker Build Fix

## Problem

The Docker build for the frontend application was failing with the following errors:
- Node.js version incompatibility: Vite requires Node.js 20.19+ or 22.12+, but the build was using Node.js 18.20.8.
- A PostCSS error (`crypto.hash is not a function`), which was a symptom of the outdated Node.js version.

## Solution

The `Dockerfile` was updated to use a newer Node.js base image.

**Change:**
- In `Dockerfile`, the base image for the build stage was changed from `node:18-alpine` to `node:20-alpine`.

This ensures that the build environment has a compatible Node.js version, allowing Vite to build the project successfully.
