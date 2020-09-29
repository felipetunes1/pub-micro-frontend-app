export default '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
'<routes xmlns="http://camel.apache.org/schema/spring">' +
'   <route customId="true" id="steps">' +
'      <from uri="direct:steps" />' +
'      <enrich strategyMethodName="aggregate" strategyRef="contentEnricheStrategy">' +
'         <constant>direct:security</constant>' +
'      </enrich>' +
'         <filter>' +
'            <jsonpath>$.payloadTracing.steps[?(@.name == "security")].response.body.profileHDI</jsonpath>' +
'            <enrich strategyMethodName="aggregate" strategyRef="contentEnricheStrategy">' +
'               <constant>direct:offerDetails</constant>' +
'            </enrich>' +
'         </filter>' +
'      <setHeader customId="true" id="response" name="CamelJsltString">' +
'         <constant>' +
'def getProcess(payloadTracingSteps, process)\n' +
'   [for($payloadTracingSteps) (.) if(.name == $process)]\n' +
'         \n' +
'getProcess(.payloadTracing.steps, "offerDetails")[0].response.body' +
'         </constant>' +
'      </setHeader>' +
'      <to uri="jslt:response" />' +
'   </route>' +
'   <route customId="true" id="security">' +
'      <from uri="direct:security" />' +
'      <setHeader name="CamelHttpMethod">' +
'         <constant>GET</constant>' +
'      </setHeader>' +
'      <setHeader name="stepName">' +
'         <constant>security</constant>' +
'      </setHeader>' +
'      <setHeader name="CamelHttpQuery">' +
'         <simple>key=${header.key}</simple>' +
'      </setHeader>' +
'      <setHeader name="companyId">' +
'         <simple>{{COMPANY_ID}}</simple>' +
'      </setHeader>' +
'      <log message="calling security api..." />' +
'      <log message="${env:URL_SECURITY}" />' +
'      <log message="${header.CamelHttpQuery}" />' +
'      <to uri="{{URL_SECURITY}}" />' +
'   </route>' +
'   <route customId="true" id="offerDetails">' +
'      <from uri="direct:offerDetails" />' +
'      <log message="${body}" />' +
'      <setHeader name="CamelHttpMethod">' +
'         <constant>GET</constant>' +
'      </setHeader>' +
'      <setHeader name="stepName">' +
'         <constant>offerDetails</constant>' +
'      </setHeader>' +
'      <setHeader name="profileHDI">' +
'         <jsonpath>$.payloadTracing.steps[?(@.name == "security")].response.body.profileHDI</jsonpath>' +
'      </setHeader>' +
'      <setHeader name="id">' +
'         <constant>5e8635e1f6d3395ea89f73fc</constant>' +
'      </setHeader>' +
'      <setHeader name="CamelHttpQuery">' +
'         <simple>key=${header.key}</simple>' +
'      </setHeader>' +
'      <setHeader name="CamelHttpPath">' +
'         <jsonpath>$.request.headers.trackId</jsonpath>' +
'      </setHeader>' +
'      <log message="calling offerDetails api..." />' +
'      <log message="${env:URL_OFFER_DETAILS}/${header.CamelHttpPath}" />' +
'      <log message="${header.CamelHttpQuery}" />' +
'      <to uri="{{URL_OFFER_DETAILS}}" />' +
'   </route>' +
'</routes>'