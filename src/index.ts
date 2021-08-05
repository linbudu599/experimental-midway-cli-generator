#!/usr/bin/env node
import cac from 'cac';
import { useControllerGenerator } from './controller';
import { useServiceGenerator } from './service';
import { useMiddlewareGenerator } from './middleware';
import { useDebuggerGenerator } from './debug';
import { useServerlessGenerator } from './serverless';

import { useTypeORMGenerator } from './typeorm';
import { useTypeGraphQLGenerator } from './type-graphql';
import { usePrismaGenerator } from './prisma';
import { useSwaggerGenerator } from './swagger';
import { useAxiosGenerator } from './axios';

const cli = cac();

// Internal Fragment
useControllerGenerator(cli);
useServiceGenerator(cli);
useMiddlewareGenerator(cli);
useDebuggerGenerator(cli);
useServerlessGenerator(cli);

// External Component / Integration
useTypeORMGenerator(cli);
useTypeGraphQLGenerator(cli);
usePrismaGenerator(cli);
useSwaggerGenerator(cli);
useAxiosGenerator(cli);

cli.parse();
