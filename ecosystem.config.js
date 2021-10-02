module.exports = {
  apps: [
    {
      name: "next_demo",
      script: "npm",
      args: "run start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
