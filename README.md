Project Title => (Full Stack Expense Tracker App) Track and manage your income and expenses in real-time using a secure and interactive MERN stack application.




Tech Stack =>
{Frontend: React.js, TailwindCSS, Chart.js},
{Backend: Node.js, Express.js},
{Database: MongoDB},
{Authentication: JWT (JSON Web Tokens)},
{Others: ExcelJS (for export), Axios}




Features =>
{User Authentication – Secure login/signup with JWT},
{📊 Dashboard Overview – Summary of total balance, income, and expenses},
{💰 Income Management – Add, view, delete, and export income},
{💸 Expense Management – Category-based add/view/delete/export expenses},
{📈 Interactive Charts – Bar, Pie, and Line charts to visualize data},
{📂 Download Reports – Export income/expense data to Excel},
{🕒 Recent Transactions – Display recent entries for quick access},
{📱 Responsive UI – Works smoothly across devices},
{🧭 Sidebar Navigation – Easy navigation for dashboard and other features},
{🗑️ Quick Delete – Hover-to-delete option for transactions}




Installation & Run Locally

Prerequisites =>
Node.js,
MongoDB (local or cloud),
npm

Backend Setup =>
cd backend,
npm install

Set up .env file inside /backend with =>
env =>
PORT=5000,
MONGO_URI=your_mongodb_connection_string,
JWT_SECRET=your_secret_key

Then run,
npm run dev

Frontend Setup =>
cd frontend,
cd expense-tracker,
npm run dev

Environment variables =>
Make sure to set the following variables in .env:
MONGO_URI,
JWT_SECRET,
PORT

