"use client";

import { useState } from "react";

type Comment = {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
};

export default function BukuTamu() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      message: "Portfolio kalian sangat bagus! Saya tertarik dengan proyek Pepekape.",
      date: new Date().toLocaleDateString("id-ID"),
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Semua field harus diisi!");
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleDateString("id-ID"),
    };

    setComments((prev) => [newComment, ...prev]);
    setFormData({ name: "", email: "", message: "" });
    alert("Komentar berhasil dikirim!");
  };

  return (
    <main>
      <h1>Buku Tamu (Guestbook)</h1>
      <p>Tinggalkan komentar untuk memberikan masukan atau sekedar berkesan kepada kami!</p>

      {/* Form Section */}
      <section className="formSection">
        <h2>Tulis Komentar</h2>
        <form onSubmit={handleSubmit} className="commentForm">
          <div className="formGroup">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Komentar</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tulis komentar Anda di sini..."
              rows={5}
              required
            />
          </div>

          <button type="submit" className="submitButton">
            Kirim Komentar
          </button>
        </form>
      </section>

      {/* Comments List Section */}
      <section className="commentsSection">
        <h2>Komentar ({comments.length})</h2>
        <div className="commentsList">
          {comments.length === 0 ? (
            <p className="noComments">Belum ada komentar. Jadilah yang pertama memberikan komentar!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="commentItem">
                <div className="commentHeader">
                  <h3>{comment.name}</h3>
                  <span className="commentDate">{comment.date}</span>
                </div>
                <p className="commentEmail">{comment.email}</p>
                <p className="commentMessage">{comment.message}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
