import assert from 'node:assert/strict'
import {test} from 'node:test'
import {issueCaptchaChallenge,verifyCaptchaSubmission,type CaptchaChallengeStore} from '../lib/inquiry-captcha'

const secret='deya-test-secret-0123456789-abcdef-0123456789'
const tenantId='18b5d06a-130c-4a6d-b7b5-6a060d101210'
const siteScope='deyaprecision-test-scope'
const scope='contact_form_0123456789abcdef'
function memoryStore(){let current:any=null;const store:CaptchaChallengeStore={issue(record){current={...record,consumed:false}},consume(record){if(!current||current.consumed)return false;const match=current.tenantId===record.tenantId&&current.siteScopeHash===record.siteScopeHash&&current.formScopeHash===record.formScopeHash&&current.challengeHash===record.challengeHash&&current.tokenHash===record.tokenHash;if(match)current.consumed=true;return match}};return store}

test('every parseable attempt consumes the current challenge and blocks replay',async()=>{const store=memoryStore();const challenge=await issueCaptchaChallenge({secret,tenantId,siteScope,scope,store,now:1000});assert.ok(challenge.testAnswer);const wrong=await verifyCaptchaSubmission({secret,tenantId,siteScope,scope,token:challenge.token,answer:'ZZZZ',store,now:1100});assert.deepEqual(wrong,{ok:false,code:'invalid'});const replay=await verifyCaptchaSubmission({secret,tenantId,siteScope,scope,token:challenge.token,answer:challenge.testAnswer!,store,now:1200});assert.deepEqual(replay,{ok:false,code:'invalid'})})

test('a valid challenge succeeds once and only once',async()=>{const store=memoryStore();const challenge=await issueCaptchaChallenge({secret,tenantId,siteScope,scope,store,now:1000});const first=await verifyCaptchaSubmission({secret,tenantId,siteScope,scope,token:challenge.token,answer:challenge.testAnswer!,store,now:1100});assert.deepEqual(first,{ok:true});const replay=await verifyCaptchaSubmission({secret,tenantId,siteScope,scope,token:challenge.token,answer:challenge.testAnswer!,store,now:1200});assert.deepEqual(replay,{ok:false,code:'invalid'})})
