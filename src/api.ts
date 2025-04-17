// src/routes/api.ts
import { Router, Request, Response } from "express";
import { RestService } from "./services/rest-service";
import { GrpcService } from "./services/grpc-service";

const router = Router();

// User Endpoints
const endpoints: Record<string, string> = {
  users: "api/users/",
  login: "api/auth/login/email",
  register: "api/auth/register",
};

router.post("/login", async (req: Request, res: Response) => {
  try {
    const restService = new RestService(req.token);
    const { email, password } = req.body;
    const loginData = await restService.postData(endpoints.login, {
      email,
      password,
    });
    res.json(loginData);
  } catch (error) {
    res.status(503).json({ error: (error as Error).message });
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const restService = new RestService(req.token);
    const { email, password } = req.body;
    const registerData = await restService.postData(endpoints.register, {
      email,
      password,
    });
    res.json(registerData);
  } catch (error) {
    res.status(503).json({ error: (error as Error).message });
  }
});

router.get("/users", async (req: Request, res: Response) => {
  try {
    const restService = new RestService(req.token);
    const users = await restService.getData(endpoints.users);
    res.json(users);
  } catch (error) {
    res.status(503).json({ error: (error as Error).message });
  }
});

// Booking Endpoints
router.get("/bookings", async (req: Request, res: Response) => {
  try {
    const grpcService = new GrpcService(req.token);
    const bookings = await grpcService.getUserBookings(req.body);
    res.json(bookings);
  } catch (error) {
    res.status(503).json({ error: (error as Error).message });
  }
});

router.post("/bookings", async (req: Request, res: Response) => {
  try {
    const grpcService = new GrpcService(req.token);
    const bookingData = await grpcService.createBooking(req.body);
    res.json(bookingData);
  } catch (error) {
    res.status(503).json({ error: (error as Error).message });
  }
});

router.get("/barber/bookings", async (req: Request, res: Response) => {
  try {
    const grpcService = new GrpcService(req.token);
    const { barberId, date } = req.query;
    const bookings = await grpcService.getBarberBookings(
      barberId as string,
      date as string
    );
    res.json(bookings);
  } catch (error) {
    res.status(503).json({ error: (error as Error).message });
  }
});

export default router;
