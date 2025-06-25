import chalk  from "chalk";
import process from "child_process";
import ora from "ora";
const spinner = ora({
    text: '正在更新 zykk-cli...',
    spinner: {
        interval: 80,
        frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'].map((item) =>
            chalk.green(item)
        ),
    }
})
export const update = async () => {
    spinner.start();
    process.exec(`npm install -g zykk-cli`, (error) => {
        spinner.stop();
        if (error) {
            console.error(chalk.red(error));
            return;
        }
        console.log(chalk.green('更新成功!'));

    });
}