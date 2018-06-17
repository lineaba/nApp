
function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">nApp Settings</Text>}>
         <TextInput settingsKey="bpm"
              title="Put resting heart rate"
              label="Resting BPM: "
              placeholder="--"
              action="Add"
            />
        <TextInput settingsKey="minutes"
              title="Put minutes."
              label="Minutes: "
              placeholder="--"
              action="Add"
            />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
