import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
    },
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      try {
        const transporter = createTransporter();
        
        const mailOptions = {
          from: process.env.SMTP_USER || process.env.EMAIL_USER || "noreply@finexactsolutions.co.ke",
          to: "info@finexactsolutions.co.ke",
          subject: `New Contact Form Submission - ${validatedData.service || "General Inquiry"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Company:</strong> ${validatedData.company || "Not provided"}</p>
            <p><strong>Service Interest:</strong> ${validatedData.service || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message}</p>
          `,
        };
        
        await transporter.sendMail(mailOptions);
        
        // Send confirmation email to user
        const confirmationOptions = {
          from: process.env.SMTP_USER || process.env.EMAIL_USER || "noreply@finexactsolutions.co.ke",
          to: validatedData.email,
          subject: "Thank you for contacting FinExact Solutions",
          html: `
            <h2>Thank you for contacting FinExact Solutions</h2>
            <p>Dear ${validatedData.firstName},</p>
            <p>We have received your inquiry regarding ${validatedData.service || "our services"} and will get back to you within 24 hours.</p>
            <p>Our team of certified accounting software experts will review your requirements and provide you with a tailored solution.</p>
            <p>Best regards,<br>FinExact Solutions Team</p>
          `,
        };
        
        await transporter.sendMail(confirmationOptions);
        
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Continue even if email fails - message is still stored
      }
      
      res.json({ 
        success: true, 
        message: "Your message has been sent successfully. We'll get back to you soon!",
        id: contactMessage.id 
      });
      
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Please check your form data and try again.",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get contact messages (for admin use)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
