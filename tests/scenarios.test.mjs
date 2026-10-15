import test from "node:test";
import assert from "node:assert/strict";
import {scenarios} from "../data/scenarios.js";
test("existem os cinco cenários obrigatórios",()=>{assert.equal(scenarios.length,5);assert.deepEqual(scenarios.map(item=>item.id),["python","generative-ai","debugging","chat-completions","free-simulation"]);});
test("cada cenário tem objetivo, descrição e etapas completas",()=>{for(const scenario of scenarios){assert.ok(scenario.title);assert.ok(scenario.description);assert.ok(scenario.objective);assert.ok(Array.isArray(scenario.steps)&&scenario.steps.length>=2);for(const step of scenario.steps){assert.ok(step.title);assert.ok(step.instructions);assert.ok(step.prompt);assert.ok(step.response);}}});
test("IDs dos cenários são únicos",()=>{const ids=scenarios.map(item=>item.id);assert.equal(new Set(ids).size,ids.length);});
test("o cenário de Chat Completions esclarece que não chama uma API real",()=>{const scenario=scenarios.find(item=>item.id==="chat-completions");assert.ok(scenario.steps.some(step=>/nenhuma requisição real|nenhuma chamada externa/i.test(step.response)));});
