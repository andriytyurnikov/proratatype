<script lang="ts">
  import "../app.pcss";

  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Separator } from "$lib/components/ui/separator";
  import { Slider } from "$lib/components/ui/slider";
  import * as Table from "$lib/components/ui/table";
  import * as Tabs from "$lib/components/ui/tabs";
	import { Root } from "postcss";
</script>

<div class="container">
  <Tabs.Root value="google" class="w-[600px] mx-auto">
    <Tabs.List class="grid w-full grid-cols-4">
      <Tabs.Trigger value="google">Google Fonts</Tabs.Trigger>
      <Tabs.Trigger value="system">System Fonts</Tabs.Trigger>
      <Tabs.Trigger value="URL">URL</Tabs.Trigger>
      <Tabs.Trigger value="upload">Upload</Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content value="google">
      <Card.Root>
        <Card.Content>
          Google fonts
        </Card.Content>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="system">
      <Card.Root>
        <Card.Content>
          System fonts
        </Card.Content>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="URL">
      <Card.Root>
        <Card.Content>
          Input font URL
        </Card.Content>
      </Card.Root>
    </Tabs.Content>

    <Tabs.Content value="upload">
      <Card.Root>
        <Card.Content>
          Upload font
        </Card.Content>
      </Card.Root>
    </Tabs.Content>

  </Tabs.Root>

  <Separator class="w-[400px] mx-auto" />

  <Card.Root class="w-[600px] mx-auto">
    <Card.Content>
      <Slider class="my-4" value={[0.1]} min={0.0} max={1.0} step={0.01}></Slider>
    </Card.Content>
  </Card.Root>

  <Separator class="w-[400px] mx-auto" />

  <Card.Root class="w-[600px] mx-auto">
    <Card.Content>
      <Table.Root>
        <Table.Caption>Proportional font-sizes per device</Table.Caption>

        <Table.Header>
          <Table.Row>
            <Table.Head class="w-1/2">Device</Table.Head>
            <Table.Head>Native font size, px</Table.Head>
            <Table.Head>CSS font-size, px</Table.Head>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell class="font-medium">iPhone SE</Table.Cell>
            <Table.Cell>16.00</Table.Cell>
            <Table.Cell>17.01</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell class="font-medium">iPhone 14</Table.Cell>
            <Table.Cell>16.00</Table.Cell>
            <Table.Cell>17.01</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell class="font-medium">iPad Air</Table.Cell>
            <Table.Cell>16.00</Table.Cell>
            <Table.Cell>17.01</Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table.Root>
    </Card.Content>
  </Card.Root>  
  
</div>