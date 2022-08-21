// Import Modules
import { ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons";

// Main Function
function ThemeToggle(props: any) {
  const { colorScheme, toggleColorScheme } = props;
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="filled"
      color={dark ? "blue" : "gray"}
      onClick={() => {
        toggleColorScheme();
      }}
      className="toggle"
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={18} /> : <IconMoon size={18} />}

      {/* Style */}
      <style>
        {`.toggle{
            margin: 1rem;
            position: fixed;
                bottom: 0;
                right: 0;
            }`}
      </style>
    </ActionIcon>
  );
}

export default ThemeToggle;
