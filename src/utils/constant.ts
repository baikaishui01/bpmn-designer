export const initXml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <bpmn2:definitions
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"
    xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
    id="sample-diagram"
    targetNamespace="http://bpmn.io/schema/bpmn"
    xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL
    BPMN20.xsd"
  >
    <bpmn2:process id="Process_1" isExecutable="false" />
    <bpmndi:BPMNDiagram id="BPMNDiagram_1">
      <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
    </bpmndi:BPMNDiagram>
  </bpmn2:definitions>
`;
