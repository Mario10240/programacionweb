using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TestApp.Library.DAL.Models;

namespace TestApp.Controllers
{
    public class Cars_MarioController : Controller
    {
        private readonly TestAppEntities _context;

        public Cars_MarioController(TestAppEntities context)
        {
            _context = context;
        }

        // GET: Cars_Mario
        public async Task<IActionResult> Index()
        {
            return View(await _context.Cars_Mario.ToListAsync());
        }

        // GET: Cars_Mario/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cars_Mario = await _context.Cars_Mario
                .FirstOrDefaultAsync(m => m.car_id == id);
            if (cars_Mario == null)
            {
                return NotFound();
            }

            return View(cars_Mario);
        }

        // GET: Cars_Mario/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Cars_Mario/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("car_id,make,model,year,is_active,created_at")] Cars_Mario cars_Mario)
        {
            if (ModelState.IsValid)
            {
                _context.Add(cars_Mario);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(cars_Mario);
        }

        // GET: Cars_Mario/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cars_Mario = await _context.Cars_Mario.FindAsync(id);
            if (cars_Mario == null)
            {
                return NotFound();
            }
            return View(cars_Mario);
        }

        // POST: Cars_Mario/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("car_id,make,model,year,is_active,created_at")] Cars_Mario cars_Mario)
        {
            if (id != cars_Mario.car_id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(cars_Mario);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!Cars_MarioExists(cars_Mario.car_id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(cars_Mario);
        }

        // GET: Cars_Mario/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cars_Mario = await _context.Cars_Mario
                .FirstOrDefaultAsync(m => m.car_id == id);
            if (cars_Mario == null)
            {
                return NotFound();
            }

            return View(cars_Mario);
        }

        // POST: Cars_Mario/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var cars_Mario = await _context.Cars_Mario.FindAsync(id);
            _context.Cars_Mario.Remove(cars_Mario);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool Cars_MarioExists(int id)
        {
            return _context.Cars_Mario.Any(e => e.car_id == id);
        }
    }
}
