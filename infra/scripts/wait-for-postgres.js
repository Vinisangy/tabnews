const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    // console.log("stdout", stdout);
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgres esta pronto e aceitando conexoes!\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexoes");

checkPostgres();
